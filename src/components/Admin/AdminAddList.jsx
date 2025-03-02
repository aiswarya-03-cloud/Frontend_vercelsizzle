import AdminHeadernavbar from '../../components/Admin/Admin_Header';
import Add from '../../pages/Admin/Add';
import List from '../../pages/Admin/List';
import Sidebar from "./Sidebar";



const AdminAddListLayout = ({ setShowLogin }) => {

return(


<div>

<AdminHeadernavbar />
<Sidebar />

        <Route path='/add' element={<Add />} />
        <Route path='/list' element={<List />} />
       


</div>


)

}

export default AdminAddListLayout;