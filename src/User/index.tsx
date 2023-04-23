import React,{FunctionComponent, useState } from "react";
import st from "./style.module.scss";
import { IUser } from "../types";

const User:FunctionComponent<IUser> = ({ name, secondName, age, rank, gender }): JSX.Element => {
    const [rankState, setRank] = useState < IUser["rank"] > (rank);

    const handlerRankUp = (): void => {
        setRank(rankState + 1);
    };

    const handlerRankDown = (): void => {
        setRank(rankState - 1);
    };

    return (
        <div className={st.UserCard}>
            <div >{`${name} ${secondName}`}</div>
            <div>{`Возраст: ${age}, пол: ${gender}`}</div>
            <div className={st.rank}>
                <div  >{`Ранг: ${rankState}`}</div>
                <div className={st.buttons}>
                    <button onClick={handlerRankUp}>+</button>
                    <button onClick={handlerRankDown}>-</button>
                </div>
            </div>

        </div>
    );
};

export default User;
