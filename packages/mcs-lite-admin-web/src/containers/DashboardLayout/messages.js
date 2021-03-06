import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'DashboardLayout.start': {
    id: 'DashboardLayout.start',
    defaultMessage: '啟動',
  },
  'DashboardLayout.start.success': {
    id: 'DashboardLayout.start.success',
    description: 'Toast',
    defaultMessage: '成功！服務已啟動。',
  },
  'DashboardLayout.stop': {
    id: 'DashboardLayout.stop',
    defaultMessage: '停止',
  },
  'DashboardLayout.stop.success': {
    id: 'DashboardLayout.stop.success',
    description: 'Toast',
    defaultMessage: '成功！服務已停止。',
  },
  'DashboardLayout.ipConnection': {
    id: 'DashboardLayout.ipConnection',
    defaultMessage: 'IP 連線',
  },
  'DashboardLayout.systemManagement': {
    id: 'DashboardLayout.systemManagement',
    defaultMessage: '系統管理',
  },
  'DashboardLayout.versionCheck': {
    id: 'DashboardLayout.versionCheck',
    defaultMessage: '版本更新檢查',
  },
  'DashboardLayout.signoutService': {
    id: 'DashboardLayout.signoutService',
    defaultMessage: '登出服務',
  },
  'DashboardLayout.confirm': {
    id: 'DashboardLayout.confirm',
    defaultMessage: '確定要登出？',
  },
});

export default messages;
