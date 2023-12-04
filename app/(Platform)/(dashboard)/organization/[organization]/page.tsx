import { auth } from "@clerk/nextjs";

const  organizationPage =()=>{

    const {userId, orgId} = auth();
    return(
    <div>
        Organization : {orgId}
    </div>
    );
};

export default organizationPage;