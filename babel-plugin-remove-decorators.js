export default ({types: t}) => {
    console.log('LOADED BABEL PLUGIN TO REMOVE DECORATORS FROM babel-plugin-transform-decorators-legacy \r\n \r\n')
    let debug = false
    let preserveConnect = false

    const isConnectDecorator = (decorator) => {
        if (debug) console.log(JSON.stringify(decorator, null, 2))
        if (!preserveConnect) return false

        return (
            (
                decorator.type == 'Decorator' &&
                decorator.expression.callee &&
                decorator.expression.callee.name == 'connect'
            ) || (
                decorator.type == 'Decorator' &&
                !decorator.expression.hasOwnProperty('callee')
            )
        )
    }

    return {
        visitor: {
            ExportDefaultDeclaration(path) {
                if (debug) console.log('ExportDefaultDeclaration')
            },
            ClassDeclaration(path) {
                if (debug) console.log('ClassDeclaration')
            },
            ClassExpression(path, state) {
                if (debug) console.log('ClassExpression')
                if (debug) console.log('DECORATORS:', (path.node.decorators || []).length);

                path.node.decorators = (path.node.decorators || []).filter(isConnectDecorator)
            },
            ObjectExpression(path, state) {
                if (debug) console.log('ObjectExpression')
            },
            AssignmentExpression(path, state) {
                if (debug) console.log('AssignmentExpression')
            }
        }
    };
}