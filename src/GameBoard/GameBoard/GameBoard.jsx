import React from 'react';
import "./GameBoard.css"
import LY_RUOU from "../../image/ly_ruou_1.png"
import ICON_SOJU from "../../image/icon_soju.png"
import AVATAR_MANH from "../../image/avatar/manh.png"
import AVATAR_LAN from "../../image/avatar/lan.png"
import AVATAR_NHU from "../../image/avatar/nhu.png"
import AVATAR_DANG from "../../image/avatar/dang.png"
import AVATAR_NANH from "../../image/avatar/nanh.png"
import AVATAR_THANH from "../../image/avatar/thanh.png"

const GameBoard = () => {
    return (
        <div>
            <div className={"game-board"}>
                <div className={"game-board__row"}>
                    <img className={"game-board__icon left-top"} src={ICON_SOJU} alt=""/>
                    <img className={"game-board__icon right-top"} src={ICON_SOJU} alt=""/>
                    <img className={"game-board__icon left-bottom"} src={ICON_SOJU} alt=""/>
                    <img className={"game-board__icon right-bottom"} src={ICON_SOJU} alt=""/>
                    <h1 className={"game-board__title"}>
                        LAN'S FRIEND
                    </h1>
                    <div className={"game-board__avatar-row"}>
                        <img className={"game-board__avatar-item"} src={AVATAR_NHU} alt=""/>
                        <img className={"game-board__avatar-item"} src={AVATAR_LAN} alt=""/>
                        <img className={"game-board__avatar-item"} src={AVATAR_MANH} alt=""/>
                    </div>
                    <div className={"game-board__image"}>
                        <img src={LY_RUOU} alt=""/>
                    </div>
                    <div className={"game-board__avatar-row"}>
                        <img className={"game-board__avatar-item"} src={AVATAR_DANG} alt=""/>
                        <img className={"game-board__avatar-item"} src={AVATAR_NANH} alt=""/>
                        <img className={"game-board__avatar-item"} src={AVATAR_THANH} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameBoard;