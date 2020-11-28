export interface TodoList {
        
        title: string,
        description: string,
        list?: List,
        group: Group
        
}
export interface List {
        
        description?: string,
        status?: number,
        addedBy?: string,
        modifyBy?: string,
        addTime?: Date,
        lastUpdate?: Date
}
export interface Group {
        
        userId?: string,
        userEmail?: string
}
export interface Users {
        email: string,
        password: string
}