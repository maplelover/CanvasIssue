import ErrorView from '../../components/error-view';

Page({
    ...ErrorView,
    data: {
        errorData: {
            type: 'empty',
            title: '什么都没有了',
            button: '返回',
            onButtonTap: 'handleBack',
            href: '/pages/list/index'
        },
    },
    handleBack() {
        dd.showToast({
          content: 'back to pages/index in 1s',
          success: (res) => {
            setTimeout(() => {
                dd.navigateBack();
            }, 1000);
          },
        });
    }
})