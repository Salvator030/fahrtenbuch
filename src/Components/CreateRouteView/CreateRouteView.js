import {
  ActionIcon,
  Button,
  Center,
  Grid,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { AddressInputView } from "./AddressInputView/AddressInputView";
import "@mantine/core/styles.css";
import useCraeteRoute from "../../hooks/createRouteHook";
import AddressesCards from "./AddressesCards/AddressesCards";
import classes from "./CreateRouteView.module.css";
import { useBetween } from "use-between";
import NewRoutePreView from "./NewRoutePreView/NewRoutePreView";
import { DistanceInput } from "./DistanceInput/DistanceInput";
import SaveQuestion from "./SaveQuestion/SaveQuestion";
import TrashIcon from "../Icons/TrashIcon";
import EyeOpenIcon from "../Icons/EyeOpenIcon";
import EyeCloseIcon from "../Icons/EyeCloseIcon";

export function CreateRouteView() {
  const [isAddNewAddress, setAddNewAddress] = useState(false);

  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const {
    startAddress,
    viewDescription,
    showHideRoutes,
    searchAddValue,
    setSearchAddValue,
    eyeIcon,
    okBtn,
    okBtnRef,
    backBtn,
    trashBtn,
  } = useSharedCreateRoute();

  const toggleAddNewAddress = () => {
    setAddNewAddress(!isAddNewAddress);
  };

  const handelOnClickOkBtn = () => {
    okBtn();
  };

  const handelOnClickBackBtn = () => {
    backBtn();
  };

  const handelOnClickAddBtn = () => {
    toggleAddNewAddress();
  };

  const handelOnClickTrashIcon = () => {
    trashBtn();
  };

  const handelOnClickEyeIcon = () => {
    eyeIcon();
  };

  return (
    <>
      {!isAddNewAddress ? (
        <Grid>
          <Grid.Col span="content">
            <Title order={3}>
              {viewDescription === "start" && "Startaddresse"}
              {viewDescription === "destination" && "Zieladdresse"}
              {viewDescription === "distance" && "Entfernung"}
              {viewDescription === "save" && "Speichern"}
            </Title>
            <Center className={classes.viewDiv}>
              {(viewDescription === "start" ||
                viewDescription === "destination") && (
                <Stack>
                  <TextInput
                    label="suche"
                    value={searchAddValue}
                    onChange={setSearchAddValue}
                  />
                  <AddressesCards />
                </Stack>
              )}
              {viewDescription === "distance" && <DistanceInput />}
              {viewDescription === "save" && <SaveQuestion />}
            </Center>

            <Grid justify="flex-start" className={classes.grid}>
              <Grid.Col span={2}>
                {(viewDescription === "start" ||
                  viewDescription === "destination") && (
                  <Button onClick={handelOnClickAddBtn}>+</Button>
                )}
              </Grid.Col>
              <Grid.Col span={2}>
                {(viewDescription === "start" ||
                  viewDescription === "destination") && (
                  // Not nice
                  <>
                    <ActionIcon onClick={handelOnClickEyeIcon}>
                      {showHideRoutes ? <EyeCloseIcon /> : <EyeOpenIcon />}
                    </ActionIcon>
                    <ActionIcon
                      onClick={handelOnClickTrashIcon}
                      disabled={!startAddress}
                      size={37}
                      style={{ top: 6 }}
                    >
                      <TrashIcon />
                    </ActionIcon>
                  </>
                )}
              </Grid.Col>
              <Grid.Col span={4}>
                <Button
                  disabled={!startAddress}
                  ref={okBtnRef}
                  onClick={handelOnClickOkBtn}
                >
                  Ok
                </Button>
              </Grid.Col>
              <Grid.Col span={4}>
                <Button onClick={handelOnClickBackBtn}>zurück</Button>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span="content">
            <NewRoutePreView />
          </Grid.Col>
        </Grid>
      ) : (
        <AddressInputView toggleAddNewAddress={toggleAddNewAddress} />
      )}
    </>
  );
}
