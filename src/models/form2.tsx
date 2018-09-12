// import { routerRedux } from 'dva/router';
import { message } from 'antd';
// import { $ } from 'jquery';
const fakeSubmitForm = function(params) {
    console.log(params);
  };

export default {
  namespace: 'formaaa',

  state: {
    step: {
      payAccount: 'ant-design@alipay.com',
      receiverAccount: 'test@example.com',
      receiverName: 'Alex',
      amount: '500',
    },
  },

  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('提交成功');
    }
  },

  reducers: {
    saveStepFormData(state, { payload }) {
      console.log(111);
      return {
        ...state,
        step: {
          ...state.step,
          ...payload,
        },
      };
    },
  },
};
