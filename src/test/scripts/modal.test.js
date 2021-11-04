describe('Modal', () => {

    const item = { id: "Dummy", ServerName: "Dummy", ServerStatus: "Online" }
    const modal = {
        displayModal: jest.fn(item => {
            let bgColor = item.ServerStatus.toLowerCase()
            let innerP = `<strong>Status</strong>: <span class="status ${bgColor}">${item.ServerStatus}<span>`
            return {
                bgColor,
                innerP,
                title: item.ServerName
            }
        })
    }

    test('displayModal handles item correctly', () => {
        let result = modal.displayModal(item)
        expect(result).not.toBe(null)
        expect(result).not.toBe(undefined)
        expect(result.bgColor).toBe('online')
        expect(result.innerP).toBe('<strong>Status</strong>: <span class="status online">Online<span>')
    })

})