import { RButton, RTextField, RFieldset, RTextarea } from '@mono/starter'

function App() {
  return (
    <main className="container mx-auto h-screen p-8">
      <div className="grid h-full grid-cols-1 place-content-center place-items-center">
        <form>
          <RFieldset legend="General">
            <div className="flex flex-col gap-y-4">
              <RTextField id={'name'} label="Name" />
              <RTextarea id={'address'} label={'Address'} />
            </div>
          </RFieldset>
          <div className="mt-4">
            <RButton type={'submit'}>Submit</RButton>
          </div>
        </form>
      </div>
    </main>
  )
}

export default App
