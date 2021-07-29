import React from 'react';
import {List,Datagrid,TextField} from 'react-admin';

const MemberList = (props)=>{
        return <List {...props}>
                    <Datagrid>
                        <TextField source='id'/>
                        <TextField source='name'/>
                        <TextField source='email'/>
                        <TextField source='role'/>
                    </Datagrid>
                </List>
            
    }
export default MemberList;