import React from 'react';
import styled from 'styled-components';
import style from '@/assets/global-style';
import PropTypes from 'prop-types';
import Marquee from '@/baseUI/marquee';

const HeaderContainer = styled.div`
  position: fixed;
  padding-top: 0;
  height: 45px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 45px;
  color: ${style['font-color-light']};
  .back {
    font-size: 20px;
    width: 40px;
    display: block;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
  }

  &.active {
    .back {
      background-color: ${style['theme-color']};
    }
  }

  > h1 {
    font-size: ${style['font-size-l']};
    font-weight: 700;
    padding-left: 40px;
  }
`;
// 处理函数组件拿不到 ref 的问题，所以用 forwardRef
const Header = React.forwardRef((props, ref) => {
  const { handleClick, title, isMarquee } = props;
  return (
    <HeaderContainer ref={ref}>
      <i className="iconfont back" onClick={handleClick}>
        &#xe655;
      </i>
      {isMarquee ? (
        <Marquee data={title} ref={ref}>
          <h1>{title}</h1>
        </Marquee>
      ) : (
        <h1>{title}</h1>
      )}
    </HeaderContainer>
  );
});

Header.defaultProps = {
  handleClick: () => {},
  title: '标题',
  isMarquee: false
};

Header.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
  isMarquee: PropTypes.bool
};

export default React.memo(Header);
