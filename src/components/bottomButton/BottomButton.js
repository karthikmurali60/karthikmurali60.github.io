import React from "react";
import "./BottomButton.css";

export default function BottomButton({ theme }) {
  function GoDownEvent() {
    console.log(document.documentElement.scrollTop);
    window.scrollTo(0, document.body.scrollHeight);
  }

  function scrollFunction() {
    if (
      document.body.scrollTop === 0 ||
      document.documentElement.scrollTop === 0
    ) {
      document.getElementById("bottomButton").style.visibility = "visible";
    } else {
      document.getElementById("bottomButton").style.visibility = "hidden";
      document.getElementById("topButton").style.visibility = "visible";
    }
  }

  window.onscroll = function () {
    scrollFunction();
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("bottomButton").style.visibility = "hidden";
    }
  };

  const onMouseEnterBottom = (color, bgColor) => {
    /* For the bottom button */
    const bottomButton = document.getElementById("bottomButton");
    bottomButton.style.color = color;
    bottomButton.style.backgroundColor = bgColor;

    /* For down arrow icon */
    const downArrow = document.getElementById("down-arrow");
    downArrow.style.color = color;
    downArrow.style.backgroundColor = bgColor;
  };

  const onMouseLeaveBottom = (color, bgColor) => {
    /* For the bottom button */
    const bottomButton = document.getElementById("bottomButton");
    bottomButton.style.color = color;
    bottomButton.style.backgroundColor = bgColor;

    /* For down arrow icon */
    const downArrow = document.getElementById("down-arrow");
    downArrow.style.color = color;
    downArrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      onClick={GoDownEvent}
      id="bottomButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Scroll down"
      onMouseEnter={() => onMouseEnterBottom(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeaveBottom(theme.body, theme.text)}
    >
      <i class="fas fa-arrow-down" id="down-arrow" aria-hidden="true" />
    </div>
  );
}
