export function addTodo(item:string) {
    return {
        type: 'ADD_TODO', payload: {item}
    }
}

export function removeTodo(id:string){
    return {
        type: 'REMOVE_TODO', payload: {id}
    }
}

export function completeTodo(id: string){
    return {
        type: 'CHANGE_STATUS', payload: {id}
    }
}