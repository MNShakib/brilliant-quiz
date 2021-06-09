import React, { useState } from "react";
//styled Components
import styled from "styled-components";
import Card from "./card";
const Chapter = () => {
  let [toggle, setToggle] = useState("nowrap");
  const expand = () => {
    setToggle(toggle == "nowrap" ? "wrap" : "nowrap");
  };

  return (
    <Section>
      <ol>
        <li className="chapter">
          <header className="container">
            <div class="chapter-number">
              <span>2</span>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 16C32 28.5 20.8366 33 12 33C3.16344 33 0 22.8366 0 14C0 5.16344 8.16344 0 17 0C25.8366 0 32 7.16344 32 16Z"
                  fill="#758bff"
                ></path>
              </svg>
            </div>
            <Text>
              <h3>The Rational Detective</h3>
              <p>
                Eliminate the impossible and uncover the truth!
                {toggle == "wrap" && (
                  <button className="btn-link" onClick={expand}>
                    Collapse
                  </button>
                )}
              </p>
            </Text>
          </header>
          <Quizzes className="container">
            <div className="hov container">
              <ol style={{ flexWrap: toggle }}>
                <Card
                  url="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=560"
                  show="false"
                />
                <Card
                  url="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=560"
                  show="false"
                />
                <Card
                  url="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=560"
                  show="false"
                />
              </ol>
              {toggle == "nowrap" && (
                <button class="expand-chapter" onClick={expand}>
                  <i
                    className="b-sprite-global-chevron-right"
                    class="fas fa-chevron-down"
                  ></i>
                </button>
              )}
            </div>
          </Quizzes>
        </li>
        <li className="chapter">
          <header className="container">
            <div class="chapter-number">
              <span>1</span>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 16C32 28.5 20.8366 33 12 33C3.16344 33 0 22.8366 0 14C0 5.16344 8.16344 0 17 0C25.8366 0 32 7.16344 32 16Z"
                  fill="#758bff"
                ></path>
              </svg>
            </div>
            <Text>
              <h3>Introduction</h3>
              <p>
                Put your logic to the test with these warmups!
                {toggle == "wrap" && (
                  <button className="btn-link" onClick={expand}>
                    Collapse
                  </button>
                )}
              </p>
            </Text>
          </header>
          <Quizzes className="container">
            <div className="hov container">
              <ol style={{ flexWrap: toggle }}>
                <Card url="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=560" />
                <Card url="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png?width=560" />
                <Card url="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png?width=560" />
                <Card url="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Futoshiki-bNVmO9.png?width=560" />
                <Card url="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Shuffles-GgH8Ox.png?width=560" />
                <Card url="https://ds055uzetaobb.cloudfront.net/brioche/chapter/False_Information-WRykiD.png?width=560" />
              </ol>
              {toggle == "nowrap" && (
                <button class="expand-chapter" onClick={expand}>
                  <i
                    className="b-sprite-global-chevron-right"
                    class="fas fa-chevron-down"
                  ></i>
                </button>
              )}
            </div>
          </Quizzes>
        </li>
      </ol>
    </Section>
  );
};

const Section = styled.section`
  min-width: 1250px;
  padding: 64px 0 0;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 60px);
  font-family: "Soleil", Arial, sans-serif;
  background: #ffffff;

  ol {
    width: 100%;
    margin-left: 0;
    list-style: none;
    padding: 0;
    margin: 0 0 0.8em 25px;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
    @media screen and (min-width: 700.08px) and (max-width: 960px) {
      .container {
        width: 700.08px;
        display: flex;
        align-items: center;
        padding: 0 4px;
        margin-right: auto;
        margin-left: auto;
      }
    }

    .container {
      display: flex;
      align-items: center;
      width: 1250px;
      margin-right: auto;
      margin-left: auto;
      padding: 0 12px;
      .chapter-number {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 33px;
        margin-right: 24px;
        font-size: 16px;
        span {
          color: #758bff;
        }
        svg {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.2;
        }
      }
    }
  }
  .chapter {
    position: relative;
    margin-bottom: 24px;
  }
`;
const Text = styled.div`
  h3 {
    margin-bottom: 4px;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
  }
  p {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.5);
    .btn-link {
      padding: 0;
      border: 0;
      margin-left: 5px;
      color: rgba(0, 0, 0, 0.5);
      border-radius: 0;
      background: none;
      line-height: inherit;
      font: inherit;
      vertical-align: baseline;
      outline: none;
      cursor: pointer;
      transition: color 100ms linear;
      text-decoration: underline;
    }
  }
`;

const Quizzes = styled.div`
  position: relative;
  overflow: hidden;
  padding: 24px 0 !important;
  display: grid;
  grid-template-columns: repeat(3, 328px);
  grid-gap: 32px;

  ol {
    display: flex;
    justify-content: flex-start;
    margin-left: 0;
    flex-wrap: nowrap;
    list-style: none;
  }
  .quizzes-wrapper {
    display: flex;
    flex: none;
    position: relative;
    width: 328px;
    margin-right: 32px;
  }
  .quiz:hover {
    box-shadow: #8080804d 0px 2px 3px 0px;
  }
  .quiz {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    padding: 24px 24px;
    background: #ffffff;
    border: 2px solid transparent;
    z-index: 1;
    text-decoration: none;
  }
  .img {
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 280px;
    height: 168px;
    margin-bottom: 24px;
    background-color: #e7e7e9;
    color: rgba(0, 0, 0, 0.4);
    font-size: 18px;
    line-height: 24px;
  }
  .text {
    flex: 1;
  }
  .brioche-bg {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=560");
  }
  .expand-chapter {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    font-family: "Soleil", Arial, sans-serif;
    outline: none;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    width: 200px;
    border: 0;
    background: linear-gradient(90deg, rgba(248, 247, 246, 0), #f8f7f6);
    padding: 0 32px;
    font-size: 30px;
    opacity: 0;
    transition: opacity 100ms linear;
    z-index: 1;
    color: #363434;
    .b-sprite-global-chevron-right {
      background-position: -175.5px -24px;
      background-repeat: no-repeat;
      overflow: hidden;
      display: block;
      text-indent: -9999px;
      width: 16px;
      height: 27px;
    }
  }
  .hov:hover {
    .expand-chapter {
      opacity: 1;
    }
  }
`;
export default Chapter;
