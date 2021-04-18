<template>
  <div class="app-container">
    <el-form
      ref="form"
      :model="form"
      label-width="140px"
    >

<!--      Credit Memo ID-->
<!--      <br/>-->
<!--      Reseller ID Numeric Value-->
<!--      <br/>-->
<!--      Hub-->
<!--      <br/>-->
<!--      Subscription ID Numeric Value-->
<!--      <br/>-->
<!--      Freshdesk Ticket ID Numeric Value-->
<!--      <br/>-->
<!--      Type Populate from Laura's list-->
<!--      <br/>-->
<!--      Vendor Code dropdown of vendor-->
<!--      name = vendor name-->
<!--      value = vendor code-->
<!--      <br/>-->
<!--      Comment Text-->
<!--      <br/>-->
<!--      UserName Auto populated-->
<!--      <br/>-->
<!--      CreateDate Auto Populated-->
<!--      <br/>-->
<!--      <br/>-->

      <el-form-item label="Credit Memo ID">
        <el-input v-model="form.creditMemoId"/>
      </el-form-item>

      <el-form-item label="Reseller ID">
        <el-input v-model="form.resellerId"/>
      </el-form-item>

      <el-form-item label="Hub">
        <el-select
          v-model="form.hub"
          placeholder="please select reseller hub"
        >
          <el-option
            label="NA (North America)"
            value="NA"
          />
          <el-option
            label="EU (Europe)"
            value="EU"
          />
          <el-option
            label="OC (Oceania)"
            value="OC"
          />
          <el-option
            label="AS (Asia)"
            value="AS"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Subscription ID">
        <el-input v-model="form.subscriptionId"/>
      </el-form-item>

      <el-form-item label="Freshdesk Ticket ID">
        <el-input v-model="form.freshdeskTicketId"/>
      </el-form-item>

      <el-form-item label="Type">
        <el-select
          v-model="form.type"
          placeholder="please select type value"
        >
          <el-option
            label="TODO: Populate from Laura's list"
            value="1"
          />
          <el-option
            label="type name - type value"
            value="2"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Vendor Code">
        <el-select
          v-model="form.vendorCode"
          placeholder="please select vendor code"
        >
          <el-option
            label="TODO: Populate vendor name from db"
            value="1"
          />
          <el-option
            label="vendor name - vendor code"
            value="2"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Comment">
        <el-input
          v-model="form.comment"
          type="textarea"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          Create
        </el-button>
        <el-button @click="onCancel">
          Cancel
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'CreditNotesForm'
})
export default class extends Vue {
  private form = {
    creditMemoId: '',
    resellerId: '',
    hub: '',
    subscriptionId: '',
    freshdeskTicketId: '',
    type: '',
    vendorCode: '',
    comment: ''
  };

  private onSubmit() {
    this.$message('submit!' + JSON.stringify(this.form))
  }

  private onCancel() {
    this.$message({
      message: 'cancel!',
      type: 'warning'
    })
  }
}
</script>

<style lang="scss" scoped>
.line {
  text-align: center;
}
</style>
