<script lang="ts" setup>
import VueCode from "@/components/ui/VueCode.vue";
// eslint-disable-next-line import/no-duplicates
import CategoriesTag from "./CategoriesTag.vue";
// eslint-disable-next-line import/no-duplicates
import CategoriesTagCode from "./CategoriesTag.vue?raw";
// eslint-disable-next-line import/no-duplicates
import CheckboxInput from "./CheckboxInput.vue";
// eslint-disable-next-line import/no-duplicates
import CheckboxInputCode from "./CheckboxInput.vue?raw";
// eslint-disable-next-line import/no-duplicates
import ChitChat from "./ChitChat.vue";
// eslint-disable-next-line import/no-duplicates
import ChitChatCode from "./ChitChat.vue?raw";
// eslint-disable-next-line import/no-duplicates
import ChooseColor from "./ChooseColor.vue";
// eslint-disable-next-line import/no-duplicates
import ChooseColorCode from "./ChooseColor.vue?raw";
import CodeBlock from "./CodeBlock.vue";
import CompanyCard from "./CompanyCard.vue";
import ContributorsCard from "./ContributorsCard.vue";
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
import NavLink from "./NavLink.vue";
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
import VacationCard from "./VacationCard.vue";
</script>

<template>
  <div class="space-y-6">
    <CodeBlock>
      <CategoriesTag />
      <template #code>
        <VueCode :code="CategoriesTagCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <CheckboxInput />
      <template #code>
        <VueCode :code="CheckboxInputCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <ChitChat />
      <template #code>
        <VueCode :code="ChitChatCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <ChooseColor />
      <template #code>
        <VueCode :code="ChooseColorCode" />
      </template>
    </CodeBlock>
  </div>

  <ErinLindford />
  <SaveChanges />
  <SaveChanges2 />
  <ListWithBorder />
  <TableWithBorder />
  <FormInput />
  <NewProject />
  <ListHover />
  <FormHelperText />
  <RadioInput />

  <PaymentMethod />
  <ListWithLink />
  <CheckboxInput />
  <EmailForm />
  <TitleAnnoyed />
  <SearchForm />
  <FileInput />
  <ListWithDot />
  <TypographySelection />
  <TypographyWithFirstLine />
  <DarkMode />
  <LoadingButton />
  <NumberInput />

  <TableAria />
  <DirectionDoc />
  <DetailsSummary />
  <CompanyCard />
  <ContributorsCard />
  <NavLink />
  <VacationCard />
</template>

<style lang="scss" scoped></style>
