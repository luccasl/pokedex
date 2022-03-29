import { FC } from 'react'
import styles from './ProgressIndicator.module.css'

const ProgressIndicator: FC<{ loading: boolean }> = ({ loading }) => {
    return (
        <div>
            { loading &&
                <div className={ styles.progressIndicator }>
                    <div className={ styles.indeterminate }>
                    
                    </div>
                </div> }
        </div>
    )
}

export { ProgressIndicator }