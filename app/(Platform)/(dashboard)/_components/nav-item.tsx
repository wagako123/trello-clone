"use client"

export type Organization ={
    id:string;
    slug: string;
    imageURL: string;
    name: string;
};

interface NavItemProps{
 isExpanded:boolean;
 isActive:boolean;
 organization: Organization;
onExpand:(id: string) => void;
};

export const NavItem =({
    isExpanded,
    isActive,
    organization,
    onExpand,
}:NavItemProps)=>{
    return(
        <div>
            Nav Item
        </div>
    )
};