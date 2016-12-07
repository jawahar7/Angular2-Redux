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

export function toggleTodo(id: string){
    return {
        type: 'TOGGLE_TODO', payload: {id}
    }
}