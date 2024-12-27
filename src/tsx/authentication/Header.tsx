import { useContext } from "react";
import { FormAuth } from "./FormAuth";
import { Profile } from "./Profile";
import { Context } from "./context/Context";

export function Header() {
    const contextSetToken = useContext(Context)
    const user = JSON.parse(contextSetToken!.profile!)
    return (
        <div className="header">
            <h2 className="head-title">Neto Social</h2>
            {contextSetToken!.profile == null ? <FormAuth setProfile={contextSetToken!.setProfile} setNewsList={contextSetToken!.setNewsList} /> : <Profile profile={user} />}
        </div>
    )
}