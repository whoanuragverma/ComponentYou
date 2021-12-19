/// <reference types="react" />
import * as react from 'react';

declare function useThemeEngine(): (react.Dispatch<react.SetStateAction<Mode>> | react.Dispatch<react.SetStateAction<string>>)[];

export { useThemeEngine };
