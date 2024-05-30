<script lang="ts" setup>
import CategoriesTag from "./CategoriesTag.vue";
import CheckboxInput from "./CheckboxInput.vue";
import ChitChat from "./ChitChat.vue";
import ChooseColor from "./ChooseColor.vue";
import DarkMode from "./DarkMode.vue";
import DetailsSummary from "./DetailsSummary.vue";
import DirectionDoc from "./DirectionDoc.vue";
import EmailForm from "./EmailForm.vue";
import ErinLindford from "./ErinLindford.vue";
import FileInput from "./FileInput.vue";
import FormHelperText from "./FormHelperText.vue";
import FormInput from "./FormInput.vue";
import ListHover from "./ListHover.vue";
import ListWithBorder from "./ListWithBorder.vue";
import ListWithDot from "./ListWithDot.vue";
import ListWithLink from "./ListWithLink.vue";
import LoadingButton from "./LoadingButton.vue";
import NewProject from "./NewProject.vue";
import NumberInput from "./NumberInput.vue";
import PaymentMethod from "./PaymentMethod.vue";
import RadioInput from "./RadioInput.vue";
import SaveChanges from "./SaveChanges.vue";
import SaveChanges2 from "./SaveChanges2.vue";
import SearchForm from "./SearchForm.vue";
import TableAria from "./TableAria.vue";
import TableWithBorder from "./TableWithBorder.vue";
import TitleAnnoyed from "./TitleAnnoyed.vue";
import TypographySelection from "./TypographySelection.vue";
import TypographyWithFirstLine from "./TypographyWithFirstLine.vue";
</script>

<template>
  <div
    class="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <div class="rounded border p-3">
      <ChitChat />
    </div>
    <div class="rounded border p-3">
      <ErinLindford />
    </div>
    <div class="rounded border p-3">
      <SaveChanges />
    </div>
    <div class="rounded border p-3">
      <SaveChanges2 />
    </div>
    <div class="rounded border p-3">
      <ListWithBorder />
    </div>
    <div class="overflow-auto rounded border p-3">
      <TableWithBorder />
    </div>
    <div class="overflow-auto rounded border p-3">
      <FormInput />
    </div>
    <div class="overflow-auto rounded border p-3">
      <NewProject />
    </div>
    <div class="overflow-auto rounded border p-3">
      <ListHover />
    </div>
    <div class="overflow-auto rounded border p-3">
      <FormHelperText />
    </div>
    <div class="overflow-auto rounded border p-3">
      <RadioInput />
    </div>
    <div class="overflow-auto rounded border p-3">
      <CategoriesTag />
    </div>
    <div class="overflow-auto rounded border p-3">
      <PaymentMethod />
    </div>
    <div class="overflow-auto rounded border p-3">
      <ListWithLink />
    </div>
    <div class="overflow-auto rounded border p-3">
      <CheckboxInput />
    </div>
    <div class="overflow-auto rounded border p-3">
      <EmailForm />
    </div>
    <div class="overflow-auto rounded border p-3">
      <TitleAnnoyed />
    </div>
    <div class="overflow-auto rounded border p-3">
      <SearchForm />
    </div>
    <div class="overflow-auto rounded border p-3">
      <FileInput />
    </div>
    <div class="overflow-auto rounded border p-3">
      <ListWithDot />
    </div>
    <div class="overflow-auto rounded border p-3">
      <TypographySelection />
    </div>
    <div class="overflow-auto rounded border p-3">
      <TypographyWithFirstLine />
    </div>
    <div class="overflow-auto rounded border p-3">
      <DarkMode />
    </div>
    <div class="overflow-auto rounded border p-3">
      <LoadingButton />
    </div>
    <div class="overflow-auto rounded border p-3">
      <NumberInput />
    </div>
    <div class="overflow-auto rounded border p-3">
      <ChooseColor />
    </div>
    <div class="overflow-auto rounded border p-3">
      <TableAria />
    </div>
    <div class="overflow-auto rounded border p-3">
      <DirectionDoc />
    </div>
    <div class="overflow-auto rounded border p-3">
      <DetailsSummary />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
