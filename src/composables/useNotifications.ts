import { ref } from 'vue';

interface Notification {
  id: number;
  message: string;
}

const notifications = ref<Notification[]>([]);

const addNotification = (message: string) => {
  const id = Date.now();
  notifications.value.push({
    id,
    message,
  });

  setTimeout(() => removeNotification(id), 5000);
};

const removeNotification = (id: number) => {
  notifications.value = notifications.value.filter((notification) => notification.id !== id);
};

export const useNotifications = () => {
  return { notifications, addNotification, removeNotification };
};
