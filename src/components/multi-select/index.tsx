import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Controller } from "react-hook-form";
import MiddleAppMultiSelect, { IPropsAppMultiSelect } from "./middle";

export const AppMultiSelect = (props: IPropsAppMultiSelect) => {
  const { control, name, ...PROPS } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <MiddleAppMultiSelect
            {...PROPS}
            onchange={onChange}
            value={value}
            error={error}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});
