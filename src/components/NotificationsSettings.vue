<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div class="flex items-center gap-1">
        <input type="checkbox" id="email" v-model="notifications.email" />
        <label for="email">Email Notifications</label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" id="sms" v-model="notifications.sms" />
        <label for="sms">SMS Notifications</label>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { useSettings } from '@/composables/useSettings';

const { notifications } = useSettings();
const { addNotification } = useNotifications();

const save = () => {
  addNotification('Privacy settings were saved successfully');
};
</script>
