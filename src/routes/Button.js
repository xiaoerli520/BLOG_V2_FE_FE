import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './Button.css';

function Button() {
  return (
      <div>
        <Icon type="up" />
      </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Button);
