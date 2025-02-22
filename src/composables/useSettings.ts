import { ref, watch } from 'vue';

interface SettingsMap {
  general: GeneralSettings;
  privacy: PrivacySettings;
  notifications: NotificationsSettings;
}

type SettingsKey = keyof SettingsMap;

interface GeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const stored = localStorage.getItem(key);

  return !stored ? defaults : JSON.parse(stored);
};

const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: SettingsMap[T]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

const general = ref<GeneralSettings>(
  init('general', {
    about: '',
    country: 'Canada',
    gender: 'male',
    email: '',
    username: '',
  }),
);

watch(general, watcher('general'), { deep: true });

interface NotificationsSettings {
  email: boolean;
  sms: boolean;
}

const notifications = ref<NotificationsSettings>(
  init('notifications', {
    email: false,
    sms: false,
  }),
);

watch(notifications, watcher('notifications'), { deep: true });

type visibility = 'public' | 'private';

interface PrivacySettings {
  visibility: visibility;
  searchEngineIndexing: boolean;
}

const privacy = ref<PrivacySettings>(
  init('privacy', {
    visibility: 'public',
    searchEngineIndexing: false,
  }),
);

watch(privacy, watcher('privacy'), { deep: true });

export const useSettings = () => {
  return { general, notifications, privacy };
};
