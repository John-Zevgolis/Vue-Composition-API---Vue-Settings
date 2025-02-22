<template>
  <Teleport to="body">
    <ol class="notification-list">
      <li v-for="notification in notifications" :key="notification.id" class="notification-item">
        <div class="text-sm font-semibold">{{ notification.message }}</div>
        <button class="notification-ack-button" @click="removeNotification(notification.id)">
          OK
        </button>
      </li>
    </ol>
  </Teleport>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';

const { notifications, removeNotification } = useNotifications();
</script>
