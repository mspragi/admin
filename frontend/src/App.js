import  React from "react";
-import { Admin } from 'react-admin';
+import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider(' https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
-const App = () => <Admin dataProvider={dataProvider} />;
+const App = () => (
+    <Admin dataProvider={dataProvider}>
+        <Resource name="users" list={ListGuesser} />
+    </Admin>
+);

export default App;