import React, {Component} from 'react';


class QuickActions extends Component {
    state = {
        // ID: this.props.ID
    }

    constructor(){
        super()
    }



    render() {
        return (
            <div>
                <div className="col-12 text-center py-3">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-success" id="quickButtonAdd" onClick={this.saveContact}>
                            <i className="fas fa-plus mr-2 "></i> Zapisz do Kontaktów
                        </button>
                        <button type="button" className="btn btn-secondary" id="quickButtonSave" onClick={this.saveChanges}>
                            <i className="fas fa-list"></i> Zapisz Zmiany na Liście
                        </button>
                        <button type="button" className="btn btn-danger" id="quickButtonRemove" onClick={this.deleteContact}>
                            <i className="fas fa-trash mr-2"></i> Usuń Klienta
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuickActions;