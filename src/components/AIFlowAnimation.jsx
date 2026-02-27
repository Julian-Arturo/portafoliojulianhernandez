import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import aiFlowAnimation from "../assets/aianimationflow.json";

const AIFlowAnimation = ({ className = '', style = {} }) => {
  return (
    <Lottie
      animationData={aiFlowAnimation}
      loop={true}
      autoplay={true}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
};

AIFlowAnimation.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AIFlowAnimation;
