<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="pageName"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { modalConfig } from './config/modal.config'

import { PageTypes } from '@/store/system/types'
import { useStore } from '@/store'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [handleResetClick, handleQueryClick, pageContentRef] = usePageSearch()
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        item => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        item => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        item => item.field === 'departmentId'
      )
      departmentItem!.options = store.entireDepartment.map(item => {
        return { title: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find(
        item => item.field === 'roleId'
      )
      roleItem!.options = store.entireRole.map(item => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(newCallback, editCallback)
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageName: PageTypes.USERS,
      pageModalRef,
      defaultInfo,
      modalConfigRef,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
