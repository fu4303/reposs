import { useToast } from "@chakra-ui/toast";
import { useEffect } from "react";
import { Redirect } from "react-router";

const _404Page_ = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "That page doesn't exist",
      description: "That page doesn't exist so we redirected you back 😊",
      status: "info",
      duration: 5000,
      isClosable: false,
      position: "bottom-left",
    });

    return () => {};
  });

  return <Redirect to={"/"} />;
};

export default _404Page_;
