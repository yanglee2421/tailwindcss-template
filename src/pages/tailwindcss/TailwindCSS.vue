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
// eslint-disable-next-line import/no-duplicates
import CompanyCard from "./CompanyCard.vue";
// eslint-disable-next-line import/no-duplicates
import CompanyCardCode from "./CompanyCard.vue?raw";
// eslint-disable-next-line import/no-duplicates
import ContributorsCard from "./ContributorsCard.vue";
// eslint-disable-next-line import/no-duplicates
import ContributorsCardCode from "./ContributorsCard.vue?raw";
// eslint-disable-next-line import/no-duplicates
import DarkMode from "./DarkMode.vue";
// eslint-disable-next-line import/no-duplicates
import DarkModeCode from "./DarkMode.vue?raw";
// eslint-disable-next-line import/no-duplicates
import DetailsSummary from "./DetailsSummary.vue";
// eslint-disable-next-line import/no-duplicates
import DetailsSummaryCode from "./DetailsSummary.vue?raw";
// eslint-disable-next-line import/no-duplicates
import DirectionDoc from "./DirectionDoc.vue";
// eslint-disable-next-line import/no-duplicates
import DirectionDocCode from "./DirectionDoc.vue?raw";
// eslint-disable-next-line import/no-duplicates
import EmailForm from "./EmailForm.vue";
// eslint-disable-next-line import/no-duplicates
import EmailFormCode from "./EmailForm.vue?raw";
// eslint-disable-next-line import/no-duplicates
import ErinLindford from "./ErinLindford.vue";
// eslint-disable-next-line import/no-duplicates
import ErinLindfordCode from "./ErinLindford.vue?raw";
// eslint-disable-next-line import/no-duplicates
import FileInput from "./FileInput.vue";
// eslint-disable-next-line import/no-duplicates
import FileInputCode from "./FileInput.vue?raw";
// eslint-disable-next-line import/no-duplicates
import FormHelperText from "./FormHelperText.vue";
// eslint-disable-next-line import/no-duplicates
import FormHelperTextCode from "./FormHelperText.vue?raw";
// eslint-disable-next-line import/no-duplicates
import FormInput from "./FormInput.vue";
// eslint-disable-next-line import/no-duplicates
import FormInputCode from "./FormInput.vue?raw";
// eslint-disable-next-line import/no-duplicates
import ListHover from "./ListHover.vue";
// eslint-disable-next-line import/no-duplicates
import ListHoverCode from "./ListHover.vue?raw";
// eslint-disable-next-line import/no-duplicates
import ListWithBorder from "./ListWithBorder.vue";
// eslint-disable-next-line import/no-duplicates
import ListWithBorderCode from "./ListWithBorder.vue?raw";
// eslint-disable-next-line import/no-duplicates
import ListWithDot from "./ListWithDot.vue";
// eslint-disable-next-line import/no-duplicates
import ListWithDotCode from "./ListWithDot.vue?raw";
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

    <CodeBlock>
      <CompanyCard />
      <template #code>
        <VueCode :code="CompanyCardCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <ContributorsCard />
      <template #code>
        <VueCode :code="ContributorsCardCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <DarkMode />
      <template #code>
        <VueCode :code="DarkModeCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <DetailsSummary />
      <template #code>
        <VueCode :code="DetailsSummaryCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <DirectionDoc />
      <template #code>
        <VueCode :code="DirectionDocCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <EmailForm />
      <template #code>
        <VueCode :code="EmailFormCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <ErinLindford />
      <template #code>
        <VueCode :code="ErinLindfordCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <FileInput />
      <template #code>
        <VueCode :code="FileInputCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <FormHelperText />
      <template #code>
        <VueCode :code="FormHelperTextCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <FormInput />
      <template #code>
        <VueCode :code="FormInputCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <ListHover />
      <template #code>
        <VueCode :code="ListHoverCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <ListWithBorder />
      <template #code>
        <VueCode :code="ListWithBorderCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <ListWithDot />
      <template #code>
        <VueCode :code="ListWithDotCode" />
      </template>
    </CodeBlock>
  </div>

  <div class="hidden">
    <SaveChanges />
    <SaveChanges2 />
    <TableWithBorder />
    <NewProject />
    <RadioInput />
    <PaymentMethod />
    <ListWithLink />
    <TitleAnnoyed />
    <SearchForm />
    <TypographySelection />
    <TypographyWithFirstLine />
    <LoadingButton />
    <NumberInput />
    <TableAria />
    <NavLink />
    <VacationCard />
  </div>
</template>

<style lang="scss" scoped></style>
