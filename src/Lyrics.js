import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import "./Lyrics.css";
import img from "./assets/testimony__3.jpeg";
import { FireOutlined } from "@ant-design/icons";

const Lyrics = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="Lyrics__container" >
            <div className="Lyrics__content" >
                <h3>ALL LYRICS</h3>
                <p >Lorem ipsum we'll play you some music.Remember to book copy your lyrics!</p>

                <Button type="primary" onClick={() => setVisible(true)}>
                    Open Modal of 1000px width
                </Button>


            </div>

            {/*<Button type="primary" onClick={() => setVisible(true)}>*/}
            {/*    Open Modal of 1000px width*/}
            {/*</Button>*/}
            {/*Modal*/}
            <div>
                <Modal
                    // closeIcon={
                    //     <FireOutlined />
                    // }
                    // mask={false}
                    // bodyStyle="body__style"

                    // wrapClassName="modal__style"

                    bodyStyle={{ color: 'gray' }}

                    title="Modal 1000px width"
                    centered
                    visible={visible}
                    onCancel={() => setVisible(false)}

                    // height={500}
                    // width={700}

                    footer={[
                        <Button
                            key="back"
                            // onClick={this.handleCancel}
                        >
                            Return
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            // loading={loading}
                            // onClick={this.handleOk}
                        >
                            Submit
                        </Button>,
                        <Button
                            key="link"
                            href="https://google.com"
                            type="primary"
                            // loading={loading}
                            // onClick={this.handleOk}
                        >
                            Search on Google
                        </Button>,
                    ]}
                >
                    <p>[Chorus]</p>
                    <p>Do some people talk about us
                        And I know it’s so struggle
                        Some people talk about us
                        I just wanna go back
                        Lemme be the better one
                        I just wanna hold ya !!!
                        Do some people talk?
                        Do they talk?
                        Some people talk about us
                        I just wanna go back
                        Lemme be the better one
                        I just wanna hold ya !!!</p>
                    <p>[Verse 1]</p>
                    <p>They always talk about me
                        Always talk about you
                        You know what I mean
                        You know what I say
                        You know what I’m talking to you
                        Baby girl you be my bestie
                        You be my all my honey
                        I just wanna go back for you
                        You be my all my angel
                        Trynna to raise our relationship baby girl
                        This wanna make reality
                        My baby well
                        You know what am talkin' to you
                        Baby you know well
                    </p>
                    <p>[Chorus]</p>
                    <p>Do some people talk about us
                        And I know it’s so struggle
                        Some people talk about us
                        I just wanna go back
                        Lemme be the better one
                        I just wanna hold ya !!!
                        Do some people talk?
                        Do they talk?
                        Some people talk about us
                        I just wanna go back
                        Lemme be the better one
                        I just wanna hold ya !!!</p>
                    <p>[Verse 2]</p>
                    <p>You are doin' well
                        You are feelin' it
                        You are mad in it
                        Fillin' up the stage
                        Baby you know well
                        Got somethin' juice too much sauce too much juice
                        Dreams come true
                        Mama told me that I gonna rise
                        Fillin' up
                        You deserve
                        You do love me
                        Fallen for you
                        Love me
                        Love you
                        Baby girl you know well
                        Talkin' to you
                        Black FW S.K.U.D.A</p>
                    <p>[Outro]</p>
                    <p>Yeah
                        I use to think about my haters
                        Love is something you gotta work at
                        Understand and overstanding
                        One touch Images</p>
                </Modal>
            </div>
        </div>

    );
};

export default Lyrics;
