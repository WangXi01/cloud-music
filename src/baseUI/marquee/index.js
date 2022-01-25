import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
const Content = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 45px;
  line-height: 45px;
`;
const Marquee = React.forwardRef((props, ref) => {
  const txt = useRef();
  const outer = useRef(ref);

  useEffect(() => {
    const outerWidth = outer.current.current.offsetWidth;
    const txtWidth = txt.current.offsetWidth;
    let w = outerWidth;
    const inter = setInterval(() => {
      w = w + txtWidth === 0 ? outerWidth : w - 1;
      txt.current.style.transform = `translate(${w}px)`;
    }, 10);
    return () => {
      clearInterval(inter);
    };
  }, []);

  return (
    <Content ref={txt}>
      <span>{props.data}</span>
    </Content>
  );
});

export default Marquee;
