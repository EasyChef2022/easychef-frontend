import { HStack, Spacer, Icon, Box } from "@chakra-ui/layout"

import PantryCategory from "./PantryCategory"
import { SmallCloseIcon } from "@chakra-ui/icons";

const PantryCategoryWrapper = (props) => {

    return (
        <>
            <PantryCategory
                {...props} />

            {props.edit == "true" ? (
                <>
                    <Spacer />

                    <SmallCloseIcon color='green.500' sx={{ cursor: 'pointer' }} />
                </>
            ) : (<></>)}
        </>
    );
}

export default PantryCategoryWrapper;