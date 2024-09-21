import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReadingRecordProvider } from './contexts/ReadingRecordContext';
import { store } from './store';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Provider store={store}>
        <ReadingRecordProvider>{children}</ReadingRecordProvider>
      </Provider>
    </>
  );
};
