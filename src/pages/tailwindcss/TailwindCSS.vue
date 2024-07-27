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
// eslint-disable-next-line import/no-duplicates
import ListWithLink from "./ListWithLink.vue";
// eslint-disable-next-line import/no-duplicates
import ListWithLinkCode from "./ListWithLink.vue?raw";
// eslint-disable-next-line import/no-duplicates
import LoadingButton from "./LoadingButton.vue";
// eslint-disable-next-line import/no-duplicates
import LoadingButtonCode from "./LoadingButton.vue?raw";
// eslint-disable-next-line import/no-duplicates
import NavLink from "./NavLink.vue";
// eslint-disable-next-line import/no-duplicates
import NavLinkCode from "./NavLink.vue?raw";
// eslint-disable-next-line import/no-duplicates
import NewProject from "./NewProject.vue";
// eslint-disable-next-line import/no-duplicates
import NewProjectCode from "./NewProject.vue?raw";
// eslint-disable-next-line import/no-duplicates
import NumberInput from "./NumberInput.vue";
// eslint-disable-next-line import/no-duplicates
import NumberInputCode from "./NumberInput.vue?raw";
// eslint-disable-next-line import/no-duplicates
import PaymentMethod from "./PaymentMethod.vue";
// eslint-disable-next-line import/no-duplicates
import PaymentMethodCode from "./PaymentMethod.vue?raw";
// eslint-disable-next-line import/no-duplicates
import RadioInput from "./RadioInput.vue";
// eslint-disable-next-line import/no-duplicates
import RadioInputCode from "./RadioInput.vue?raw";
// eslint-disable-next-line import/no-duplicates
import SaveChanges from "./SaveChanges.vue";
// eslint-disable-next-line import/no-duplicates
import SaveChangesCode from "./SaveChanges.vue?raw";
// eslint-disable-next-line import/no-duplicates
import SaveChanges2 from "./SaveChanges2.vue";
// eslint-disable-next-line import/no-duplicates
import SaveChanges2Code from "./SaveChanges2.vue?raw";
// eslint-disable-next-line import/no-duplicates
import SearchForm from "./SearchForm.vue";
// eslint-disable-next-line import/no-duplicates
import SearchFormCode from "./SearchForm.vue?raw";
// eslint-disable-next-line import/no-duplicates
import TableAria from "./TableAria.vue";
// eslint-disable-next-line import/no-duplicates
import TableAriaCode from "./TableAria.vue?raw";
// eslint-disable-next-line import/no-duplicates
import TableWithBorder from "./TableWithBorder.vue";
// eslint-disable-next-line import/no-duplicates
import TableWithBorderCode from "./TableWithBorder.vue?raw";
// eslint-disable-next-line import/no-duplicates
import TitleAnnoyed from "./TitleAnnoyed.vue";
// eslint-disable-next-line import/no-duplicates
import TitleAnnoyedCode from "./TitleAnnoyed.vue?raw";
// eslint-disable-next-line import/no-duplicates
import TypographySelection from "./TypographySelection.vue";
// eslint-disable-next-line import/no-duplicates
import TypographySelectionCode from "./TypographySelection.vue?raw";
// eslint-disable-next-line import/no-duplicates
import TypographyWithFirstLine from "./TypographyWithFirstLine.vue";
// eslint-disable-next-line import/no-duplicates
import TypographyWithFirstLineCode from "./TypographyWithFirstLine.vue?raw";
// eslint-disable-next-line import/no-duplicates
import VacationCard from "./VacationCard.vue";
// eslint-disable-next-line import/no-duplicates
import VacationCardCode from "./VacationCard.vue?raw";
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

    <CodeBlock>
      <ListWithLink />
      <template #code>
        <VueCode :code="ListWithLinkCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <LoadingButton />
      <template #code>
        <VueCode :code="LoadingButtonCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <NavLink />
      <template #code>
        <VueCode :code="NavLinkCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <NewProject />
      <template #code>
        <VueCode :code="NewProjectCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <NumberInput />
      <template #code>
        <VueCode :code="NumberInputCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <PaymentMethod />
      <template #code>
        <VueCode :code="PaymentMethodCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <RadioInput />
      <template #code>
        <VueCode :code="RadioInputCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <SaveChanges />
      <template #code>
        <VueCode :code="SaveChangesCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <SaveChanges2 />
      <template #code>
        <VueCode :code="SaveChanges2Code" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <SearchForm />
      <template #code>
        <VueCode :code="SearchFormCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <TableAria />
      <template #code>
        <VueCode :code="TableAriaCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <TableWithBorder />
      <template #code>
        <VueCode :code="TableWithBorderCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <TitleAnnoyed />
      <template #code>
        <VueCode :code="TitleAnnoyedCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <TypographySelection />
      <template #code>
        <VueCode :code="TypographySelectionCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <TypographyWithFirstLine />
      <template #code>
        <VueCode :code="TypographyWithFirstLineCode" />
      </template>
    </CodeBlock>

    <CodeBlock>
      <VacationCard />
      <template #code>
        <VueCode :code="VacationCardCode" />
      </template>
    </CodeBlock>
  </div>
</template>

<style lang="scss" scoped></style>
