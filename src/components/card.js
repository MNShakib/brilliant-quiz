import React from "react";
import styled from "styled-components";
const Card = ({ url, show = "true" }) => {
  return (
    <QuizWrapper>
      <a
        href="https://brilliant.org/practice/warmup-puzzles-6/?p=1"
        className="quiz"
      >
        <div className="img">
          <span
            className="brioche-bg"
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></span>
          {show == "true" && (
            <span className="locked">
              <span className="icon">
                <em className="lock-white">
                  <i class="fas fa-lock"></i>
                </em>
              </span>
              <span className="expl">
                Included with
                <br />
                Brilliant Premium
              </span>
            </span>
          )}
        </div>
        <div className="text">
          <h4>Strategic Deductions</h4>
          <div>
            <p>Stretch the information you're given as far as it can go!</p>
          </div>
        </div>
        <div className="progress">
          <span></span>
        </div>
      </a>
    </QuizWrapper>
  );
};

const QuizWrapper = styled.li`
  display: flex;
  flex: none;
  position: relative;
  width: 328px;
  margin-right: 32px;

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
    .locked {
      background: rgba(0, 0, 0, 0.75);
      color: #ffffff;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .icon,
      .expl {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transition: opacity 100ms linear;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .lock-white {
          color: #ffffff;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
        }
      }
      .expl {
        opacity: 0;
      }
    }
  }
  .quiz:hover {
    box-shadow: #8080804d 0px 2px 3px 0px;
    .icon {
      opacity: 0;
    }
    .expl {
      opacity: 1;
    }
  }
  .text {
    flex: 1;
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: normal;
    line-height: 24px;
    color: #000000;
    p {
      margin: 0 0 20px 0;
      font-size: 14px;
      line-height: 19px;
      color: #000000;
      opacity: 0.5;
    }
  }
  .brioche-bg {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default Card;
