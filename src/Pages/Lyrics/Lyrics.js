import React, { useState } from 'react';
import "./Lyrics.css";
import { lyricsData } from "./LyricsData";


const Lyrics = () => {
    // const [visible, setVisible] = useState(false);

    let indexPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return (
        <div className="Lyrics__container" >
            <div className="Lyrics__content" >
                <h3>ALL LYRICS</h3>
                <p >Lorem ipsum we'll play you some music.Remember to copy your lyrics!</p>

                <div className="Lyrics__accordion" >
                    <form>
                        { lyricsData.map((tab, index) => (
                            <div key={index}>
                                <h4>
                                    <div className="a-wrapper" >
                                        <a
                                            onClick={(e) => eventHandler(e, index)}
                                            className={ active === index ? 'active' : 'inactive'}
                                            aria-expanded={ active === index ? 'true' : 'false' }
                                            aria-controls={ 'sect-' + indexCount(index) }
                                            aria-disabled={ active === index ? 'true' : 'false' }
                                            tabIndex={indexCount(index)}
                                        >
                                            <span className="title-wrapper" >{tab.title}
                                                <span className={ active === index  ? 'minus' : 'plus'}></span>
                                            </span>
                                        </a>
                                    </div>
                                </h4>
                                <div className="description-wrapper" >
                                    <div id={ 'sect-' + indexCount(index) } className={ active === index  ? 'panel-open' : 'panel-close' }>
                                        <p>{ tab.description }</p>
                                        {/*{ tab.description }*/}
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </form>
                </div>

                {/*<Button type="primary" onClick={() => setVisible(true)}>*/}
                {/*    Open Modal of 1000px width*/}
                {/*</Button>*/}


            </div>


            {/*Modal*/}
            {/*<div>*/}
            {/*    <Modal*/}
            {/*        // closeIcon={*/}
            {/*        //     <FireOutlined />*/}
            {/*        // }*/}
            {/*        // mask={false}*/}
            {/*        // bodyStyle="body__style"*/}

            {/*        // wrapClassName="modal__style"*/}

            {/*        bodyStyle={{ color: 'gray' }}*/}

            {/*        title="Modal 1000px width"*/}
            {/*        centered*/}
            {/*        visible={visible}*/}
            {/*        onCancel={() => setVisible(false)}*/}

            {/*        // height={500}*/}
            {/*        // width={700}*/}

            {/*        footer={[*/}
            {/*            <Button*/}
            {/*                key="back"*/}
            {/*                // onClick={this.handleCancel}*/}
            {/*            >*/}
            {/*                Return*/}
            {/*            </Button>,*/}
            {/*            <Button*/}
            {/*                key="submit"*/}
            {/*                type="primary"*/}
            {/*                // loading={loading}*/}
            {/*                // onClick={this.handleOk}*/}
            {/*            >*/}
            {/*                Submit*/}
            {/*            </Button>,*/}
            {/*            <Button*/}
            {/*                key="link"*/}
            {/*                href="https://google.com"*/}
            {/*                type="primary"*/}
            {/*                // loading={loading}*/}
            {/*                // onClick={this.handleOk}*/}
            {/*            >*/}
            {/*                Search on Google*/}
            {/*            </Button>,*/}
            {/*        ]}*/}
            {/*    >*/}
            {/*        <p>[Chorus]</p>*/}
            {/*        <p>Do some people talk about us*/}
            {/*            And I know it’s so struggle*/}
            {/*            Some people talk about us*/}
            {/*            I just wanna go back*/}
            {/*            Lemme be the better one*/}
            {/*            I just wanna hold ya !!!*/}
            {/*            Do some people talk?*/}
            {/*            Do they talk?*/}
            {/*            Some people talk about us*/}
            {/*            I just wanna go back*/}
            {/*            Lemme be the better one*/}
            {/*            I just wanna hold ya !!!</p>*/}
            {/*        <p>[Verse 1]</p>*/}
            {/*        <p>They always talk about me*/}
            {/*            Always talk about you*/}
            {/*            You know what I mean*/}
            {/*            You know what I say*/}
            {/*            You know what I’m talking to you*/}
            {/*            Baby girl you be my bestie*/}
            {/*            You be my all my honey*/}
            {/*            I just wanna go back for you*/}
            {/*            You be my all my angel*/}
            {/*            Trynna to raise our relationship baby girl*/}
            {/*            This wanna make reality*/}
            {/*            My baby well*/}
            {/*            You know what am talkin' to you*/}
            {/*            Baby you know well*/}
            {/*        </p>*/}
            {/*        <p>[Chorus]</p>*/}
            {/*        <p>Do some people talk about us*/}
            {/*            And I know it’s so struggle*/}
            {/*            Some people talk about us*/}
            {/*            I just wanna go back*/}
            {/*            Lemme be the better one*/}
            {/*            I just wanna hold ya !!!*/}
            {/*            Do some people talk?*/}
            {/*            Do they talk?*/}
            {/*            Some people talk about us*/}
            {/*            I just wanna go back*/}
            {/*            Lemme be the better one*/}
            {/*            I just wanna hold ya !!!</p>*/}
            {/*        <p>[Verse 2]</p>*/}
            {/*        <p>You are doin' well*/}
            {/*            You are feelin' it*/}
            {/*            You are mad in it*/}
            {/*            Fillin' up the stage*/}
            {/*            Baby you know well*/}
            {/*            Got somethin' juice too much sauce too much juice*/}
            {/*            Dreams come true*/}
            {/*            Mama told me that I gonna rise*/}
            {/*            Fillin' up*/}
            {/*            You deserve*/}
            {/*            You do love me*/}
            {/*            Fallen for you*/}
            {/*            Love me*/}
            {/*            Love you*/}
            {/*            Baby girl you know well*/}
            {/*            Talkin' to you*/}
            {/*            Black FW S.K.U.D.A</p>*/}
            {/*        <p>[Outro]</p>*/}
            {/*        <p>Yeah*/}
            {/*            I use to think about my haters*/}
            {/*            Love is something you gotta work at*/}
            {/*            Understand and overstanding*/}
            {/*            One touch Images</p>*/}
            {/*    </Modal>*/}
            {/*</div>*/}
        </div>

    );
};

export default Lyrics;
