<template>
    <router-view v-slot="{ Component }">
        <template v-if="Component">
            <KeepAlive>
                <suspense timeout="0">
                    <!-- main content -->
                    <template #default>
                        <component :is="Component" />
                    </template>

                    <!-- loading state -->
                    <template #fallback>
                        <div>
                            Loading...
                        </div>
                    </template>
                </suspense>
            </KeepAlive>
        </template>
    </router-view>
</template>
