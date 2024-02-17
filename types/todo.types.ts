export interface IField {
    // $createdAt: string,
    $id: string
}
// export interface ICustomer extends IField {
//     name: string,
//     email: string,
//     avatar_url: string,
//     froum_source?: string
// }

export interface ITask extends IField {
    text: string
}
export enum EStatus {
    'on-hold' = 'to-be-agreed',
    'in-progress' = 'in-progress',
    'needs-review' = 'needs-review',
    'approved' = 'approved'
}
export interface ITodo extends IField {
    tasks: ITask[]
    status: EStatus
}
