Ext.define('app.store.Users', {
    extend: 'Ext.data.Store',
    model: 'app.model.User',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        pageSize: 25,
        limitParam: 'size',
        startParam: undefined,
        api: {
            create: 'user/Add',
            read: 'user/List',
            update: 'user/Update',
            destroy: 'user/delete'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: false
        }
    }
});