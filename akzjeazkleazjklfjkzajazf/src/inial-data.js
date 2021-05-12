const initialData = {
    tasks:{
        'task-1':{id: 'task-1', content:'coca.jpg'},
        'task-2':{id: 'task-2', content:'7up.jpg'},
        'task-3':{id: 'task-3', content:'duke.jpg'},
        'task-4':{id: 'task-4', content:'pepsi.jpg'},
    },
    columns: {
        'column-1':{
            id:'column-1',
            title:'S',
            taskIds: []
        },
        'column-2':{
            id:'column-2',
            title:'A',
            taskIds: []
        },
        'column-3':{
            id:'column-3',
            title:'B',
            taskIds: []
        },
        'column-4':{
            id:'column-4',
            title:'C',
            taskIds: []
        },
        'column-5':{
            id:'column-5',
            title:'D',
            taskIds: []
        },
        'column-6':{
            id:'column-6',
            title:'',
            taskIds:['task-1','task-2', 'task-3', 'task-4']
        },
    },

    columnOrder: ['column-1', 'column-2', 'column-3','column-4','column-5','column-6'],
};

export default initialData