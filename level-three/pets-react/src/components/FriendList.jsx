import React from "react";
import data from "../data"
import FriendCard from "./Friends";

export default function FriendList() {
    const friendInfo = data.map((pals) => {
        return <FriendCard {...pals} />
    })
    return (
        <div className="friend-list">
            {friendInfo}
        </div>
    )
}