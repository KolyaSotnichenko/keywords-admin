import { NextPage } from "next";
import { AuthGuard } from "src/components/authentication/auth-guard";
import { DashboardLayout } from "src/components/dashboard/dashboard-layout";


const Complaints: NextPage = () => {
    return (
        <>
        Complaints page
        </>
    )
}

Complaints.getLayout = (page) => (
    <AuthGuard>
      <DashboardLayout>
        {page}
      </DashboardLayout>
    </AuthGuard>
  );
  
export default Complaints;