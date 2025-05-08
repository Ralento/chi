import React from "react";
import  { Layout, TopNav } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function Index(){
    return (
        <Layout>
            <TopNav
                leftContent={<Ionicons name="chevron-back" size={20} color={"black"} />}
                leftAction={() => console.log('back icon pressed')}
                middleContent="Profile"
            />
            <TopNav
                rightContent={
                    <Ionicons name="ellipsis-vertical" size={20} color={"black"} />
                }
                rightAction={() => console.log('setting icon pressed')}
                middleContent="Settings"
            />
        </Layout>
    );
};