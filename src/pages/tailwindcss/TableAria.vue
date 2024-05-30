<script lang="ts" setup></script>

<template>
  <table
    class="w-full border-collapse border-y border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-slate-800"
  >
    <thead class="bg-slate-50 dark:bg-slate-700">
      <tr>
        <th
          class="group border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900 first:border-l-0 last:border-r-0 dark:border-slate-600 dark:text-slate-200"
          aria-sort="ascending"
        >
          <span class="flex w-full items-center justify-between gap-2">
            Invoice #
            <svg
              viewBox="0 0 20 20"
              class="h-5 w-5 fill-slate-500 group-aria-[sort=ascending]:rotate-0 group-aria-[sort=descending]:rotate-180"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </th>
        <th
          class="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900 first:border-l-0 last:border-r-0 dark:border-slate-600 dark:text-slate-200"
        >
          Client
        </th>
        <th
          class="border border-slate-300 px-4 py-3 text-right font-semibold text-slate-900 first:border-l-0 last:border-r-0 dark:border-slate-600 dark:text-slate-200"
        >
          Amount
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          class="border border-slate-300 px-4 py-3 text-slate-500 first:border-l-0 last:border-r-0 dark:border-slate-700 dark:text-slate-400"
        >
          #100
        </td>
        <td
          class="border border-slate-300 px-4 py-3 text-slate-500 first:border-l-0 last:border-r-0 dark:border-slate-700 dark:text-slate-400"
        >
          Pendant Publishing
        </td>
        <td
          class="border border-slate-300 px-4 py-3 text-right tabular-nums text-slate-500 first:border-l-0 last:border-r-0 dark:border-slate-700 dark:text-slate-400"
        >
          $2,000.00
        </td>
      </tr>
      <tr>
        <td
          class="border border-slate-300 px-4 py-3 text-slate-500 first:border-l-0 last:border-r-0 dark:border-slate-700 dark:text-slate-400"
        >
          #101
        </td>
        <td
          class="border border-slate-300 px-4 py-3 text-slate-500 first:border-l-0 last:border-r-0 dark:border-slate-700 dark:text-slate-400"
        >
          Kruger Industrial Smoothing
        </td>
        <td
          class="border border-slate-300 px-4 py-3 text-right tabular-nums text-slate-500 first:border-l-0 last:border-r-0 dark:border-slate-700 dark:text-slate-400"
        >
          $545.00
        </td>
      </tr>
      <tr>
        <td
          class="border border-slate-300 px-4 py-3 text-slate-500 first:border-l-0 last:border-r-0 dark:border-slate-700 dark:text-slate-400"
        >
          #102
        </td>
        <td
          class="border border-slate-300 px-4 py-3 text-slate-500 first:border-l-0 last:border-r-0 dark:border-slate-700 dark:text-slate-400"
        >
          J. Peterman
        </td>
        <td
          class="border border-slate-300 px-4 py-3 text-right tabular-nums text-slate-500 first:border-l-0 last:border-r-0 dark:border-slate-700 dark:text-slate-400"
        >
          $10,000.25
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
